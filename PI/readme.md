<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PetLife</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    background:linear-gradient(135deg,#0F172A,#1E3A8A,#14B8A6);
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

.card{

    width:1000px;
    height:550px;

    background:rgba(255,255,255,.1);
    backdrop-filter:blur(18px);

    border-radius:30px;
    overflow:hidden;

    display:flex;

    box-shadow:0 20px 60px rgba(0,0,0,.35);

}

.left{

    flex:1;
    padding:60px;
    color:white;

    display:flex;
    flex-direction:column;
    justify-content:center;

}

.left h1{

    font-size:60px;
    margin-bottom:15px;

}

.left p{

    font-size:20px;
    line-height:35px;
    color:#E2E8F0;

}

.button{

    margin-top:40px;
    width:220px;
    padding:18px;

    background:#22C55E;

    border-radius:12px;
    text-align:center;

    font-weight:bold;
    cursor:pointer;

    transition:.3s;

}

.button:hover{

    background:#16A34A;

}

.right{

    flex:1;

    display:flex;
    justify-content:center;
    align-items:center;

}

.phone{

    width:320px;
    height:600px;

    background:white;

    border-radius:40px;

    box-shadow:0 20px 40px rgba(0,0,0,.3);

    padding:25px;

}

.header{

    display:flex;
    justify-content:space-between;
    align-items:center;

}

.logo{

    font-size:28px;
    font-weight:bold;
    color:#2563EB;

}

.pet{

    font-size:70px;
    text-align:center;
    margin-top:25px;

}

.name{

    text-align:center;
    font-size:30px;
    font-weight:bold;
    margin-top:10px;

}

.subtitle{

    text-align:center;
    color:#64748B;
    margin-bottom:30px;

}

.grid{

display:grid;
grid-template-columns:repeat(2,1fr);
gap:15px;

}

.item{

background:#F1F5F9;

padding:18px;

border-radius:18px;

text-align:center;

transition:.3s;

}

.item:hover{

transform:translateY(-5px);

background:#DBEAFE;

}

.item span{

font-size:40px;

display:block;

margin-bottom:8px;

}

.footer{

margin-top:25px;

background:#22C55E;

padding:16px;

border-radius:15px;

text-align:center;

color:white;

font-weight:bold;

}

</style>

</head>
<body>

<div class="card">

<div class="left">

<h1>🐾 PetLife</h1>

<p>

Gerencie toda a vida do seu pet em um único aplicativo.

✔ Vacinação

✔ Consultas

✔ Alimentação

✔ Medicamentos

✔ Histórico Clínico

✔ Lembretes

</p>

<div class="button">
Conheça o Projeto
</div>

</div>

<div class="right">

<div class="phone">

<div class="header">
<div class="logo">PetLife</div>
<div>🔔</div>
</div>

<div class="pet">
🐶
</div>

<div class="name">
Thor
</div>

<div class="subtitle">
Golden Retriever • 3 anos
</div>

<div class="grid">

<div class="item">
<span>💉</span>
Vacinas
</div>

<div class="item">
<span>🩺</span>
Consultas
</div>

<div class="item">
<span>🍖</span>
Alimentação
</div>

<div class="item">
<span>💊</span>
Medicamentos
</div>

<div class="item">
<span>📅</span>
Agenda
</div>

<div class="item">
<span>📍</span>
Localização
</div>

</div>

<div class="footer">
❤️ Tudo em dia!
</div>

</div>

</div>

</div>

</body>
</html>
