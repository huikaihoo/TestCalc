Build Docker Images
```
# Server
docker build -t huikaihoo/test-calc-server:<TAG> server

# Client
docker build -t huikaihoo/test-calc-client:<TAG> client
```

Docker Compose (build from source)
```
# Prepare
docker-compose -f docker-compose-m.yaml -f docker-compose-b.yaml config > docker-compose.yaml

# Start
docker-compose up --build

# Stop
docker-compose down
```

Docker Compose
```
# Prepare
docker-compose -f docker-compose-m.yaml config > docker-compose.yaml

# Start
docker-compose up

# Stop
docker-compose down
```

Kubernetes (use remote docker images)
```
# Prepare
docker-compose -f docker-compose-m.yaml config > docker-compose.yaml

# Start
kompose up

# Stop
kompose down
```