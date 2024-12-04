import chefClaudeIcon from './images/chef-claude-icon.png';

export default function Header()  {
    return (
      <header className="Header">
        <img src={chefClaudeIcon}/>
        <h1>Claude Chef</h1>
      </header>
    )
}