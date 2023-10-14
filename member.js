function skillsMember() 
{
    var member = document.getElementById("member").value;
    var member = member.toLowerCase();
    var member = member.replace(/\s+/g, '');
    var member = member.replace(/[^a    -z0-9]/g, '');  
    var member = member.replace(/[^a-z0-9]/g, '');
    var member = member.replace(/[^a-z0-9]/g, '');
}