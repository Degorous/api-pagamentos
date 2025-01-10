# API Pagamentos


<p>Para executar o projeto react, abra a pasta 'pagamentos' e execute 'yarn start'. Para executar o projeto rails, abra a pasta 'app_pagamentos' e execute 'rails server'.</p>
<p>Os usuários podem ser criados pelo console do rails ou por um client http.</p>

```sh
curl --request POST \
  --url 'http://localhost:3001/signup?=' \
  --header 'Content-Type: application/json' \
  --data '{
  	  "user":{
  		"name": "João",
  		"email": "joao@mail.com",
  		"password": "joao@mail.com"
  	  }
  }'
```

<p>É preciso se cadastrar e gerar um token de ambiente(MP_ACCESS_TOKEN) no site do Mercado Pago. </p>
<p>https://www.mercadopago.com.br/developers</p>
