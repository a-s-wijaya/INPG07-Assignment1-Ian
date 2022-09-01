// Declare form
var form = document.getElementById('isian');
// Declare form elements
var nama = document.getElementById('nama');
var role = document.getElementById('role');
var ava = document.getElementById('availability');
var age = document.getElementById('usia');
var loc = document.getElementById('lokasi');
var exp = document.getElementById('experience');
var email = document.getElementById('email');

// Declare current data
var name_cur = document.getElementById('bio-name');
var role_cur = document.getElementById('bio-role');
var ava_cur = document.getElementById('bio-ava');
var age_cur = document.getElementById('bio-age');
var loc_cur = document.getElementById('bio-loc');
var exp_cur = document.getElementById('bio-exp');
var email_cur = document.getElementById('bio-email');

function edit(){
    // Fill form with current data
    nama.value = name_cur.innerText
    role.value = role_cur.innerText
    ava.value = ava_cur.innerText
    age.value = age_cur.innerText
    loc.value = loc_cur.innerText
    exp.value = exp_cur.innerText
    email.value = email_cur.innerText

    // Declare form visibility
    var display = form.style.display;
    if (display == 'block') {
        form.style.display = 'none';
    } else {
        form.style.display = 'block';
    }
}

function submithandler(){
    var a = document.forms["isibio"]["nama"].value;
    var b = document.forms["isibio"]["role"].value;
    var c = document.forms["isibio"]["availability"].value;
    var d = document.forms["isibio"]["usia"].value;
    var e = document.forms["isibio"]["lokasi"].value;
    var f = document.forms["isibio"]["experience"].value;
    var g = document.forms["isibio"]["email"].value;
    if (a == null || a == "" || a == "-") {
        alert("Nama harus diisi");
        return false;
    } else if (b == null || b == "" || b == "-") {
        alert("Role harus diisi");
        return false;
    } else if (c == null || c == "" || c == "-") {
        alert("Availability harus diisi");
        return false;
    } else if (d == null || d == "" || d == "-") {
        alert("Usia harus diisi");
        return false;
    } else if (e == null || e == "" || e == "-") {
        alert("Lokasi harus diisi");
        return false;
    } else if (f == null || f == "" || f == "-") {
        alert("Experience harus diisi");
        return false;
    } else if (g == null || g == "" || g == "-") {
        alert("Email harus diisi");
        return false;
    } else {
        if(confirm('Apakah anda yakin ingin mengubah data?') == true) {
            name_cur.innerText = nama.value;
            role_cur.innerText = role.value;
            ava_cur.innerText = ava.value;
            age_cur.innerText = age.value;
            loc_cur.innerText = loc.value;
            exp_cur.innerText = exp.value;
            email_cur.innerText = email.value;

            // Saving data to local storage
            localStorage.setItem('name', name_cur.innerText);
            localStorage.setItem('role', role_cur.innerText);
            localStorage.setItem('ava', ava_cur.innerText);
            localStorage.setItem('age', age_cur.innerText);
            localStorage.setItem('loc', loc_cur.innerText);
            localStorage.setItem('exp', exp_cur.innerText);
            localStorage.setItem('email', email_cur.innerText);

            form.style.display = 'none';
    
            // Showing snackbar
            var x = document.getElementById("popup");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        } else {
            return false;
        }
    }
}

function resetdata(){
    localStorage.setItem('name', 'Adrian Sugandi Wijaya');
    localStorage.setItem('role', 'Front End Developer');
    localStorage.setItem('ava', 'Full Time');
    localStorage.setItem('age', '19');
    localStorage.setItem('loc', 'Bekasi, Indonesia');
    localStorage.setItem('exp', '2');
    localStorage.setItem('email', 'adrian.s.wijaya@upi.edu');

    name_cur.innerText = localStorage.getItem('name');
    role_cur.innerText = localStorage.getItem('role');
    ava_cur.innerText = localStorage.getItem('ava');
    age_cur.innerText = localStorage.getItem('age');
    loc_cur.innerText = localStorage.getItem('loc');
    exp_cur.innerText = localStorage.getItem('exp');
    email_cur.innerText = localStorage.getItem('email');
}

function loaddata(){
    name_cur.innerText = localStorage.getItem('name');
    role_cur.innerText = localStorage.getItem('role');
    ava_cur.innerText = localStorage.getItem('ava');
    age_cur.innerText = localStorage.getItem('age');
    loc_cur.innerText = localStorage.getItem('loc');
    exp_cur.innerText = localStorage.getItem('exp');
    email_cur.innerText = localStorage.getItem('email');
}