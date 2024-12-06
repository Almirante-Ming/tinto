const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('seu_banco', 'seu_usuario', 'sua_senha', { dialect: 'postgres' });

const app = express();
app.use(express.json());

// Models
const User = sequelize.define('User', { name: DataTypes.STRING, email: DataTypes.STRING });
const Post = sequelize.define('Post', { title: DataTypes.STRING, content: DataTypes.TEXT });
const Comment = sequelize.define('Comment', { content: DataTypes.TEXT });
const Tag = sequelize.define('Tag', { name: DataTypes.STRING });

User.hasMany(Post);
Post.belongsTo(User);
Post.hasMany(Comment);
Comment.belongsTo(Post);
Post.belongsToMany(Tag, { through: 'PostTag' });
Tag.belongsToMany(Post, { through: 'PostTag' });

// Endpoints
app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

app.post('/users', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

// Similar endpoints for Posts, Comments, and Tags

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
