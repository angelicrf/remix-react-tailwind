export async function getMembers(company){
    const searchCompany = !company ? "remix-run" : company;
    
        let res = await fetch(`https://api.github.com/orgs/${searchCompany}/members`)
        console.log("res is " + JSON.stringify(res)) 
        return res;
 }