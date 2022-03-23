const expressAccessToken = require('express-access-token');
//https://www.allkeysgenerator.com/Random/Security-Encryption-Key-Generator.aspx
const accessTokens = [
    "65574ada-6fd7-41dd-b29f-8895b101095f",
    "16cf4b74-ed4a-46cd-a2f0-bd0baf9a9e32",
    "2d7f8f16-6239-437d-a43f-2bcf88bf87ed",
    "05b7f13a-d8ff-41aa-8adf-54181e1e8103",
    "4933e06b-7339-4de4-9105-36e5e904729d",
    "8c953a66-e032-4329-b713-612589aea643",
    "65f431d5-3589-4b5f-b315-c4d389b42988",
    "b9090302-afc2-4535-9e6d-08dd4ad15705",
    "2ce7f5b3-5336-4090-a511-712f3f7982e3",
    "6fb32ccd-f011-4fa8-a595-0b61c20df616",
    "79e0c169-7517-4b93-86f2-785896d983ff",
    "4ad08d5a-4021-4142-8dfe-1954782f2824",
    "4bb1db2d-aed6-4452-8de8-68a74288ecea",
    "ac26a450-77aa-4de9-913c-d13e67aaec45",
    "aa374f2c-dd12-43a8-bcd7-b173587ff5de",
    "ec6f3b6c-ee69-48ee-b49f-f352c84d2105",
    "83030331-d92a-4748-a9d9-fc49f5c6fe99",
    "337ce720-5c62-4303-b265-28e06af27062",
    "20f17f1e-b7fc-41cf-a3f8-fa60cb212b92",
    "b94ba5a2-f87a-4731-8c0c-8f114f7ceae0",
    "18afe9a4-c1e6-43b1-90f4-1857ba535fc6",
    "6082e9a2-0fdc-4932-b623-658369fd460a",
    "8e5f4d07-68a8-4bfd-aa70-92025eee064d",
    "99e96aa7-7fa5-4ff4-900e-5adcf3a03d68",
    "4792308c-a541-4c14-8983-95404afda8a4"
];

const firewall = (req, res, next) => {
    const authorized = accessTokens.includes(req.accessToken);
    if(!authorized) return res.status(403).send('Forbidden');
    next();
};

module.exports = {firewall, expressAccessToken, accessTokens}
