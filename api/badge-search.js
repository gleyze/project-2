export default async function handler(request, res){

    const badgesearch = [
        {
            "header": "Technology & Information",
            "img": "https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png",
            "title": "APA Style Citations: Introduction",
            "creator": "Victoria Raish"
        },
        {
            "header": "Education",
            "title": "IST Career Sources",
            "img": "https://badgesapp.psu.edu/uploads/badge/image/692/icon125-color15.png",
            "creator": "Cassie Rosas-Carson"
        },
        {
            "header": "Professional Skills",
            "title": "IST Careers - Meet a Coach - Level 2",
            "img": "https://badgesapp.psu.edu/uploads/badge/image/687/icon108-color16.png",
            "creator": "Rita Griffith"
        },
        {
            "header": "Agriculture & Natural Resources",
            "title": "[test] Treat Yourself",
            "img": "https://badgesapp.psu.edu/uploads/badge/image/676/icon77-color14.png",
            "creator": "Allain Daigle"
        }
    ];

    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badgesearch);
}
