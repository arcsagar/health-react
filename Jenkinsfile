node {
    stage('Checkout Git') {
        steps {
            git branch: 'main', url: 'https://github.com/arcsagar/health-react.git' // Replace with your actual URL
        }
    }

    stage('Install Dependencies') {
        steps {
            sh 'npm install'
        }
    }

    stage('Build') {
        steps {
            sh 'npm run build'
        }
    }

    stage('Run Tests (Optional)') {
        steps {
            // Add your test commands here, e.g.,
            // sh 'npm test'
        }
    }

    stage('Deploy (Optional)') {
        steps {
            // Add your deployment steps here, e.g.,
            // sh 'cp -r dist/ public_html/' // Example for a simple local deployment
        }
    }
}