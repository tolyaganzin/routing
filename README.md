### Routing with ui-router (angular-material)
```
bower install
npm install
```
The simple app with routing:
-main paiges
-sub pages
##Nginx config
```
server {
	#listen 80 default_server;
	#listen [::]:80 default_server;

	root /var/www/projects/routing;
	index index.html;

	server_name routing.dev www.routing.dev;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
        	try_files $uri $uri/ /index.html =404;
	}

	# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
	#
	location ~ \.php$ {
		include snippets/fastcgi-php.conf;

		# With php7.0-cgi alone:
		#fastcgi_pass 127.0.0.1:9000;
		# With php7.0-fpm:
		fastcgi_pass unix:/run/php/php7.0-fpm.sock;
	}

	# deny access to .htaccess files, if Apache's document root
	# concurs with nginx's one
	#
	#location ~ /\.ht {
	#	deny all;
	#}
}
```
### Look my next better app with Angular JS and yii2 (full rest api): https://github.com/tolyaganzin/angular-yii2
