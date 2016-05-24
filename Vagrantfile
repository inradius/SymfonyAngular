# -*- mode: ruby -*-
# vi: set ft=ruby :

PATH = File.expand_path(File.dirname(__FILE__))

Vagrant.configure("2") do |config|
  config.vm.box = "enemy-of-the-state/centos-7.1"
  config.vm.box_url = "https://atlas.hashicorp.com/enemy-of-the-state/boxes/centos-7.1_kernel-devel-fixed/versions/1.0.0/providers/virtualbox.box"
  config.vm.network :private_network, ip: "192.168.33.22"
  config.vm.synced_folder PATH, "/srv", type: "nfs"
  config.vm.provision :shell, :path => File.join(PATH, 'vm', 'provision.sh')
  config.vm.hostname = "local.symfony-ng.com"
  config.vm.provider "virtualbox" do |v|
    v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    v.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
    v.customize ["modifyvm", :id, "--memory", 4096]
    v.customize ["modifyvm", :id, "--cpus", 4]
  end
end
