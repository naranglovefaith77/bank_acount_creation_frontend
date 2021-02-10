import React from 'react'




function HeaderComponent() {
    return (
        <div class="bg-img">
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand " href="#"><b>CITIZEN CARD SYSTEM</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/"><b>Home</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/citizenid"><b>Citizen Id</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/bankaccount"><b>Bank Account</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/create"><b>Telephone Connection</b></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
        </div>
        
    )
}

export default HeaderComponent