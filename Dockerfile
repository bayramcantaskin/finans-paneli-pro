FROM python:3.11-slim
WORKDIR /app
COPY . .
RUN pip install flask requests flask-limiter flask-socketio
CMD ["python", "bist_api.py"]
