pipeline {
    agent any

    tools {
        nodejs 'node-v22'
    }

    environment {
        ENV_PROYECTO = credentials('ENV_ADMIN')
    }

    stages {
        stage('Copy Environment Variables Api') {
            steps {
                script {
                    sh 'cp $ENV_PROYECTO ./api/.env'
              }
           }
        }
                
        stage('Build') {
            steps {
                sh 'cd ./api & yarn ' 
                sh 'cd ./client & yarn '
            }
        }
    
    }
}
