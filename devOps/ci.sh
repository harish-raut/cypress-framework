echo running tests $1
npx cypress run --spec ./cypress/integration/scripts/$1 --browser chrome