# Factorim Boilerplate Kubernetes Deployment Guide

This document provides detailed instructions on how to deploy this full-stack application on a Kubernetes environment.

## Deploy

### Deploy App

```bash
cd ./devops/kubernetes/app
```

Execute the following commands to apply configuration files:

```bash
kubectl apply -f app-deployment.yaml
kubectl apply -f app-service.yaml
kubectl apply -f app-ingress.yaml
```

### Deploy API

```bash
cd ./devops/kubernetes/api
```

Execute the following commands to apply configuration files:

```bash
kubectl apply -f api-deployment.yaml
kubectl apply -f api-service.yaml
kubectl apply -f api-ingress.yaml
```

### Deploy Composer

```bash
cd ./devops/kubernetes/composer
```

Execute the following commands to apply configuration files:

```bash
kubectl apply -f api-deployment.yaml
kubectl apply -f api-service.yaml
kubectl apply -f api-ingress.yaml
```

### Deploy Postgres

```bash
cd ./devops/kubernetes/postgres
```

Execute the following commands to apply configuration files:

```bash
kubectl apply -f postgres-deployment.yaml
kubectl apply -f postgres-service.yaml
```

## Verify

Get running pods:

```bash
kubectl get pods
```
