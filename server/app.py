# server/app.py

from flask import Flask
from models import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True, port=5555)
