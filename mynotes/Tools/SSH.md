Ref: [Link](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

#### Terminal
```shell
# Generate key
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# Get public key
cat ~/.ssh/id_rsa.pub
# Copy the contents and put it to GitHub or GitLab
```
