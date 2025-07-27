#!/bin/bash

# Detect OS
OS="$(uname -s)"
ARCH="$(uname -m)"

echo "Detected OS: $OS"
echo "Detected Arch: $ARCH"

BINARY=""

# Normalize OS name
case "$OS" in
    Linux)
        if [[ "$ARCH" == "x86_64" ]]; then
            if grep -q avx2 /proc/cpuinfo 2>/dev/null; then
                BINARY="./src/server-linux-modern"
            else
                BINARY="./src/server-linux-baseline"
            fi
        elif [[ "$ARCH" == "aarch64" ]]; then
            BINARY="./src/server-linux-arm"
        fi
        ;;
    Darwin)
        if [[ "$ARCH" == "arm64" ]]; then
            BINARY="./src/server-macos-arm"
        elif [[ "$ARCH" == "x86_64" ]]; then
            BINARY="./src/server-macos-intel"
        fi
        ;;
    MINGW*|MSYS*|CYGWIN*|Windows_NT)
        BINARY="./src/server-windows.exe"
        ;;
esac

# Run binary if found
if [[ -x "$BINARY" ]]; then
    echo "✅ Running: $BINARY"
    exec "$BINARY"
else
    echo "❌ Unsupported platform or binary not found for: OS=$OS ARCH=$ARCH"
    exit 1
fi
