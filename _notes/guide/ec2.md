---
---

### Create instance
1. Choose EC2 service
2. Click on "Create Instance"
3. Choose the desired image
4. Choose the type of the instance
5. Click "Confirm and create"
6. Confirm the options and click "Create"
7. Download the pem file
8. Finish creation

### Local settings
[Ref](https://docs.aws.amazon.com/ja_jp/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html)
```shell
# Confirm access to the EC2 instance - ID can be seen in the EC2 screen
aws ec2 get-console-output --instance-id <instance-id>

# Move pem file to ~/.ssh folder, and set the correct permissions
chmod 400 ~/.ssh/my-key-pair.pem

# Using the username of your instance and public dns name, connect to instance
ssh -i ~/.ssh/my-key-pair.pem ec2-user@ec2-198-51-100-1.compute-1.amazonaws.com
```

### (Optional) Set config file for ssh
#### ~/.ssh/config
```
Host instance-name
    HostName ec2-12-345-678-901.compute-1.amazonaws.com
    User ec2-user
    IdentityFile ~/.ssh/secret-key.pem
```

#### Terminal
```shell
ssh instance-name
```
