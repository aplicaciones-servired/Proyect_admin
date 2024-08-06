pipeline {
    agent any

    tools {
        nodejs 'node-v22'
    }

    environment {
        ENV_PROYECTO = credentials('ENV_ADMIN')
    }

    stages {
        stage('DeleteProyect') {
            steps {
                sh 'rm -rf ./*'
            }
        }

        stage('Build') {
            steps {
                sh '''
                cd Proyect_admin/api
                yarn
                cd ../client
                yarn
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh '''
                    cd Proyect_admin/client
                    yarn build
                    '''
                }
            }
        }

        stage('Copy Environment Variables Api') {
            steps {
                script {
                    sh 'cp $ENV_PROYECTO Proyect_admin/api/.env'
                }
            }
        }

        stage('delete files on nginx if exist') {
            steps {
                script {
                    if (sh(script: "sudo ls /home/containers/nginx-proxy/html/admin", returnStatus: true) == 0) {
                        sh "sudo rm -r /home/containers/nginx-proxy/html/admin"
                    } else {
                        echo "Folder does not exist."
                        echo "continuing..."
                    }
                }
            }
        }

        stage('create folder on nginx if not exist') {
            steps {
                script {
                    if (sh(script: "sudo ls /home/containers/nginx-proxy/html/admin", returnStatus: true) != 0) {
                        sh "sudo mkdir /home/containers/nginx-proxy/html/admin"
                    } else {
                        echo "Folder already exists."
                        echo "continuing..."
                    }
                }
            }
        }

        stage('copy files to nginx') {
            steps {
                script {
                    sh "sudo cp -r Proyect_admin/client/dist/* /home/containers/nginx-proxy/html/admin"
                }
            }
        }

        stage('delete images') {
            steps {
                script {
                    def images = 'admin'
                    def imageId = sh(script: "docker images -q ${images}", returnStdout: true).trim()
                    if (imageId) {
                        sh "docker rmi ${images}"
                    } else {
                        echo "Image ${images} does not exist."
                        echo "continuing..."
                    }
                }
            }
        }

        stage('down Docker Compose') {
            steps {
                script {
                    try {
                        sh 'docker compose down'
                    } catch (err) {
                        echo "No Docker Compose configuration file found or failed to execute 'docker compose down'. Error: ${err}"
                    }
                }
            }
        }
    }
}
