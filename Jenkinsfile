pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                sh """
                    docker rmi ghcr.io/vaishnaviil0105-jpg/nginx:latest 2>/dev/null || true
                    docker pull ghcr.io/vaishnaviil0105-jpg/nginx:latest
                """
            }
        }

        stage('Deploy') {
            steps {
                sh """
                    docker stop fe 2>/dev/null || true
                    docker rm fe 2>/dev/null || true

                    docker run -d -p 3000:80 \
                    -v \$(pwd)/index.html:/usr/share/nginx/html/index.html \
                    -v \$(pwd)/style.css:/usr/share/nginx/html/style.css \
                    -v \$(pwd)/script.js:/usr/share/nginx/html/script.js \
                    --name fe ghcr.io/vaishnaviil0105-jpg/nginx:latest
                """
            }
        }

    }
}