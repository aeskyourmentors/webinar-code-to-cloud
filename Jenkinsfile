pipeline {
    agent any 

    environment {
        IMAGE_TAG = "$BUILD_NUMBER"
        dockerhub_credential_id = "dockerhub"
        APP_NAME = "yourmentors_fe"
        GIT_REPO = "https://github.com/askyourmentors/webinar-code-to-cloud-app.git"
        UPSTRING_CONFIG_PROJECT_NAME = "config_pipeline"
     }
    triggers {
        githubPush()
        // $JENKINS_BASE_URL/github-webhook/
    }

    stages {
        stage('CLEANUP WORKSPACE'){
            steps{
                script{
                    cleanWs()
                }
            }
        }

        stage("CHECKOUT GIT REPO"){
            steps{
                git branch: 'main', url: "${GIT_REPO}"
            }
        }



        stage("BUILD+PUSH DOCKER IMAGES TO DOCKERHUB"){
            steps{
                withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'PASSWORD', usernameVariable: 'USER_NAME')]) {
                    sh'docker build --no-cache -t ${USER_NAME}/${APP_NAME}:${IMAGE_TAG} .'   
                    sh'echo ${PASSWORD} | docker login --username ${USER_NAME} --password-stdin'
                    sh'docker push ${USER_NAME}/${APP_NAME}:${IMAGE_TAG}'
                    sh'docker logout'
                }
            }
        }

        stage("TRIGGERING THE CONFIG PIPELINE"){
            steps{
                build job: env.UPSTRING_CONFIG_PROJECT_NAME, parameters: [string(name: 'IMAGE_TAG', value: env.IMAGE_TAG),string(name: 'APP_NAME', value: env.APP_NAME)]
            }
        }
        
    }

}