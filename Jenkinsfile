pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/aitharoshankumar/festival.git'
            }
        }

        stage('Build Containers') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Deploy Application') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
