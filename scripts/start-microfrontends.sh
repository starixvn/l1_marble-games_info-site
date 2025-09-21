#!/bin/bash

# Script to start all microfrontends and the host app

echo "Starting Microfrontends..."

# Function to start a microfrontend in background
start_microfrontend() {
    local name=$1
    local port=$2
    local dir=$3
    
    echo "Starting $name on port $port..."
    cd "$dir" && yarn dev &
    sleep 2
}

# Start all microfrontends
start_microfrontend "Hero" 3001 "microfrontends/hero"
start_microfrontend "About" 3002 "microfrontends/about"
start_microfrontend "Services" 3003 "microfrontends/services"
start_microfrontend "Game Showcase" 3004 "microfrontends/game-showcase"

# Wait a bit for microfrontends to start
echo "Waiting for microfrontends to start..."
sleep 5

# Start host app
echo "Starting Host App on port 3000..."
cd /Volumes/Data/lumi/info-site && yarn dev

echo "All microfrontends and host app are running!"
echo "Host App: http://localhost:3000"
echo "Hero: http://localhost:3001"
echo "About: http://localhost:3002"
echo "Services: http://localhost:3003"
echo "Game Showcase: http://localhost:3004"
