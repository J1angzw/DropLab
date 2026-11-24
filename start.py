#!/usr/bin/env python3
"""Serve the self-contained frontend locally. Python 3 standard library only."""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


def main():
    parser = argparse.ArgumentParser(description='DropLab local website')
    parser.add_argument('--port', type=int, default=8000)
    args = parser.parse_args()
    if not 1 <= args.port <= 65535:
        parser.error('port must be in 1–65535')
    root = Path(__file__).resolve().parent / 'dist'
    if not (root / 'index.html').is_file():
        parser.error('dist/index.html is missing')
    SimpleHTTPRequestHandler.extensions_map['.mjs'] = 'application/javascript'
    handler = partial(SimpleHTTPRequestHandler, directory=str(root))
    with ThreadingHTTPServer(('127.0.0.1', args.port), handler) as server:
        print(f'DropLab: http://127.0.0.1:{args.port}/', flush=True)
        print('Press Ctrl+C to stop. Records are stored in this browser.', flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == '__main__':
    main()
