#!/usr/bin/env python3
"""
Flask wrapper for GlassBox Metrics Next.js application
This serves as a proxy to the Next.js production server
"""

import subprocess
import time
import requests
from flask import Flask, request, Response
import threading
import os

app = Flask(__name__)

# Next.js server configuration
NEXTJS_PORT = 3001
NEXTJS_URL = f"http://localhost:{NEXTJS_PORT}"

def start_nextjs_server():
    """Start the Next.js production server"""
    try:
        print("🚀 Starting Next.js production server...")
        
        # Change to the project directory
        os.chdir('/home/ubuntu/glassbox-complete')
        
        # Start the Next.js server on port 3001 to avoid conflicts
        env = os.environ.copy()
        env['PORT'] = str(NEXTJS_PORT)
        
        process = subprocess.Popen(
            ['npm', 'run', 'start'],
            env=env,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )
        
        # Wait for the server to start
        time.sleep(5)
        
        # Check if server is running
        try:
            response = requests.get(NEXTJS_URL, timeout=5)
            print(f"✅ Next.js server started successfully on port {NEXTJS_PORT}")
        except:
            print("❌ Failed to start Next.js server")
            
    except Exception as e:
        print(f"❌ Error starting Next.js server: {e}")

# Start Next.js server in a separate thread
nextjs_thread = threading.Thread(target=start_nextjs_server, daemon=True)
nextjs_thread.start()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def proxy_to_nextjs(path):
    """Proxy all requests to the Next.js server"""
    try:
        # Forward the request to Next.js server
        url = f"{NEXTJS_URL}/{path}"
        
        # Forward query parameters
        if request.query_string:
            url += f"?{request.query_string.decode()}"
        
        # Make request to Next.js server
        resp = requests.get(
            url,
            headers={key: value for key, value in request.headers if key != 'Host'},
            timeout=30
        )
        
        # Return the response
        return Response(
            resp.content,
            status=resp.status_code,
            headers=dict(resp.headers)
        )
        
    except Exception as e:
        return f"Error proxying request: {e}", 500

@app.route('/health')
def health_check():
    """Health check endpoint"""
    try:
        resp = requests.get(NEXTJS_URL, timeout=5)
        return {"status": "healthy", "nextjs_status": resp.status_code}, 200
    except:
        return {"status": "unhealthy", "nextjs_status": "down"}, 500

if __name__ == '__main__':
    print("🌟 Starting GlassBox Metrics Flask proxy server...")
    app.run(host='0.0.0.0', port=5000, debug=False)

