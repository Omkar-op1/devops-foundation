FROM python:3.11-slim

# Create a dedicated non-root user for runtime.
RUN useradd -m myuser

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN chown -R myuser:myuser /app

USER myuser

EXPOSE 5000
CMD ["python", "app.py"]