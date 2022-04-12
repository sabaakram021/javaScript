const request=require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link="https://www.espncricinfo.com/series/ipl-2021-1249214/rajasthan-royals-vs-mumbai-indians-51st-match-1254093/full-scorecard";

request(link,cb);

function cb(error,response,html)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        const dom = new JSDOM(html);
        const document=dom.window.document;
        let playerName=document.querySelectorAll("tbody .ds-border-b.ds-border-line.ds-text-tight-s .ds-min-w-max .ds-inline-flex.ds-items-center.ds-leading-none");
        for(let i=0;i<playerName.length;i++)
        {
            console.log(playerName[i].textContent);
        }
    }
}