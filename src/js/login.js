function openLoginModal() { 
    document.getElementById("loginModal").style.display = "block"; 
} 

function closeLoginModal() { 
    document.getElementById("loginModal").style.display = "none"; 
} 

window.onclick = function(event) { 
    var modal = document.getElementById("loginModal"); 
    if (event.target == modal) { modal.style.display = "none"; } 
};