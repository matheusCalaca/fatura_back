# Fatura_back

esse projeto foi feito para armazenar uma 

# Start

1. criar um banco no (mongo)[https://cloud.mongodb.com/] para armazenar os dados.

2. altera a conexão para o seu banco criado
	
	a. mudar para os dados de conexão no arquivo ``` app.js ```

	```JS
	mongoose.connect(' mongodb+srv://<USER>:<password>@cluster0.7ysrs.mongodb.net/<dbname>?retryWrites=true&w=majority', [...])
	```
3. Iniciar proseto

```sh
    npm start
```

4. [API DOC](http://localhost:3000/api-docs)


