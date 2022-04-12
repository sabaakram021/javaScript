const request=require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link="https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link,cb);
function cb(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        // console.log(html);
        const dom = new JSDOM(html);
        const document=dom.window.document;
        let highestWicketTaker=0;
        let playerName="";
        let bowlerTable=document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-fixed:nth-child(2)");
        // console.log(bowlerTable.length);
        for(let i=0;i<bowlerTable.length;i++)
        {
            let rows=bowlerTable[i].querySelectorAll("tbody tr");
            for(let j=0;j<rows.length;j++)
            {
                let tds=rows[j].querySelectorAll("td");
                if(tds.length>1)
                {
                    let names=tds[0].textContent;
                    let wicket=tds[4].textContent;
                    if(wicket>highestWicketTaker)
                    {
                        highestWicketTaker=wicket;
                        playerName=names;

                    }
                    // console.log(names,"       ",wicket)
                }
            }
        }
        console.log(playerName);
        console.log(highestWicketTaker);

    }
}