export default async function handler(request, res){

    const badgesearch = [
        {
            "header": "Technology & Information",
            "img": "social:whatshot",
            "title": "APA Style Citations: Introduction",
            "creator": "Creator: Victoria Raish"
        },
        {
            "header": "Education",
            "title": "IST Career Sources",
            "img": "social:school",
            "creator": "Creator: Cassie Rosas-Carson"
        },
        {
            "header": "Professional Skills",
            "title": "IST Careers - Meet a Coach - Level 2",
            "img": "social:people-outline",
            "creator": "Creator: Rita Griffith"
        },
        {
            "header": "Agriculture & Natural Resources",
            "title": "[test] Treat Yourself",
            "img": "places:spa",
            "creator": "Creator: Allain Daigle"
        }
    ];

    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badgesearch);
}
