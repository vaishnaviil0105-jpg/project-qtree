pipeline {

    agent any

    stages {


        stage('Build') {

            steps {

                withCredentials([
                    usernamePassword(
                        credentialsId: 'ghcr-token',
                        usernameVariable: 'USER',
                        passwordVariable: 'TOKEN'
                    )
                ]) {


                    sh '''
                    echo $TOKEN | docker login ghcr.io -u $USER --password-stdin

                    docker pull ghcr.io/vaishnaviil0105-jpg/nginx:latest

                    '''

                }

            }

        }


        stage('Deploy') {

    steps {

        sh '''
        docker rm -f dashboard || true

        docker run -d \
        -p 8081:80 \
        --name dashboard \
        ghcr.io/vaishnaviil0105-jpg/nginx:latest
        '''

    }

        } 
    }
}