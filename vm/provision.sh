#!/usr/bin/env bash

# Get EPEL and update
rpm -ivh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
rpm -ivh https://rhel7.iuscommunity.org/ius-release.rpm
yum update -y

# Install Apache and stuff
yum install -y httpd vim git npm

# Install base packages
yum install -y php56u php56u-pdo php56u-mcrypt php56u-common php56u-gd php56u-cli php56u-xml php56u-json php56u-common php56u-mbstring php56u-soap php56u-intl mod_php56u

chkconfig httpd on
mv /etc/httpd/conf/httpd.conf /etc/httpd/conf/httpd.conf.back
cp -uf /srv/vm/httpd.conf /etc/httpd/conf/httpd.conf
cp -uf /srv/vm/symfony-ng.conf /etc/httpd/conf.d/symfony-ng.conf
cp -uf /srv/vm/php.ini /etc/php.ini
systemctl start httpd

rm -rf /var/www/html
ln -s /srv/web /var/www/html
chown -R vagrant:vagrant /var/lib/php/session/

wget http://getcomposer.org/composer.phar -O /usr/local/bin/composer
chmod a+rx /usr/local/bin/composer

cd /srv/
/usr/local/bin/composer install
cd /srv/ng-app
npm install -g n
n 4.2.6
npm install -g bower gulp