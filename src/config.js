const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-wkfscvsh4yx3"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.liuligroup.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_4oy4GYV6N",
    APP_CLIENT_ID: "2a2t1bl39udi3ho23m8m1ug52r",
    IDENTITY_POOL_ID: "us-east-1:742281b0-4398-4973-a3d7-0cd168a4e6d2"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-ipnhi5ymld4q"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.liuligroup.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_BV68Bh4BB",
    APP_CLIENT_ID: "7pfioiumjvqsvop247knjhs1rc",
    IDENTITY_POOL_ID: "us-east-1:b6ec76cf-c049-414b-b849-4e1addbaa9dd"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
