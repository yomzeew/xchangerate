export function mydate(value){
    const daystringarray=['Sunday','Monday','Tuesday','Wednesday','Thurday','Friday','Saturday']
    const getday=new Date(value).getDay()
     const daystring=daystringarray[getday]
     const daydate=new Date(value).getDate()
     const montharray=['JANUARY','FEBURARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER']
     const month=new Date(value).getMonth()
     const monthstring=montharray[month]
     const year=new Date(value).getFullYear()
     return daystring+' '+daydate+' '+monthstring+','+year

}
console.log(mydate(1710248264000))
export function mytime(value){
    const getminutes=new Date(value).getMinutes()
    const getfinalminute=getminutes<10?'0'+getminutes:getminutes
    const gethours=new Date(value).getHours()
    const getfinalhours=gethours<10?'0'+gethours:gethours
    return getfinalhours+':'+getfinalminute


}

