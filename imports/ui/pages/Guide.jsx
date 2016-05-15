import React from 'react';
import Paper from 'material-ui/Paper';
export default class Guide extends React.Component {
    render() {
        return (
            <Paper style={{padding: 32, maxWidth: 800}}>
                <h2>Character Sheet Philosophy</h2>
                <p>Setting up your character on Dicecloud is going to take you a little longer than just filling it in on a paper character sheet would have. The goal of using an online sheet is to make actually playing the game more streamlined, and ultimately more fun. So putting a little extra effort into setting up your character now will pay off over and over again once you're playing.</p>
                <p>The idea is to track where each number comes from, and allow you to easily make changes on the fly.</p>
                <p>Lets look at a hypothetical example.</p>
                <p>
                    You need to swim through a sunken section of dungeon to fetch the quest's Thing.<br/>You'll need to take off your magical Plate Armor of +1 Constitution to swim without sinking, of course. Taking it off will change your armor class, your speed and your constitution, which in turn changes your hitpoints and your constitution saving throw. Working out all those changes in the middle of a game will drag the game to a hault. <br/> Fortunately you have a digital character sheet, so it's a matter of dragging your Plate Armor +1 Con from your "equipment" box to your "backpack" box and you're done. Your hitpoints change correctly, your saving throws are up to date, your armor class goes back to reflecting the fact that you have natural armor from being a dragonborn. Your character sheet keeps up and you ultimately get more time to play the game. Huzzah!
                </p>
                <h2>Creating a Character</h2>
                <ul>
                    <li>In the <a href="/characterList">character list</a>, click the plus button, floating in the bottom right corner.</li>
                    <li>Give your character a name, gender and race, these can be changed later if you change your mind. Then click the Add button</li>
                    <li>Your new character should open, with most of its attributes and abilities at zero.</li>
                </ul>

                <h2>Adding Racial Effects</h2>
                <p>You have already given your character a race, but you haven't yet specified what that race does for your character, so lets do that.</p>
                <ul>
                    <li>Click the Journal tab</li>
                    <li>In the card that displays your level, click on your race to open the racial dialog box</li>
                    <li>Click the edit button in the top corner of the racial dialog</li>
                </ul>
                <p>In the edit mode of the racial dialog you can change your race's name and add effects and proficiencies your race gives you. We will only be adding the base traits our race gives us, specific features can go in the features tab so we can more easily reference them later.</p>
                <p>Lets add some of the effects all races will give.</p>
                <ul>
                    <li>Click the Add Effect button, a new effect should appear</li>
                    <li>In the Stat Group dropdown box, choose "Stats"</li>
                    <li>The second dropdown lets us choose which stat to effect, choose "Speed"</li>
                    <li>The third dropdown lets us choose how to effect that stat, choose "Base Value", since our character's base speed comes from their race</li>
                    <li>Finally, input the value for our characters speed, it'll probably be 30 unless you chose a slower race, such as a dwarf</li>
                    <li>Close the Race dialog and navigate to the Stats tab</li>
                    <li>The speed card should now correctly display the character's speed</li>
                    <li>Click the speed card to see how that value was calculated</li>
                    <li>Currently there is only one number effecting the total, the speed from our race, but as more effects from different sources start impacting our character's speed, they will show up here.</li>
                </ul>

                <h2>Adding your ability scores</h2>
                <p>Your character currently doesn't have any ability scores, so lets fix that. Whether you roll your abilities or point-buy them, lets add a feature to represent where they came from</p>
                <ul>
                    <li>Navigate to the <emd>Features</emd> tab</li>
                    <li>Click the plus button in the bottom right to add a new feature</li>
                    <li>Give the Feature a name, like <em>Point Buy</em></li>
                    <li>Leave the feature as always enabled, don't limit its uses, and leave the description blank</li>
                    <li>Click the <em>Add Effect</em> button</li>
                    <li>For <em>Stat Group</em> choose <em>Ability Scores</em></li>
                    <li>For <em>Stat</em> choose <em>Strength</em></li>
                    <li>For the operation choose <em>Base Value</em></li>
                    <li>Input your character's rolled or point-bought strength, without the racial modfier</li>
                    <li>Repeat for the rest of your ability scores</li>
                </ul>
                <p>You can now check that your ability scores appear on your <em>Stats</em> page and that your skills that use them have their values calculated accordingly.</p>
                <p>We didn't include your character's racial ability modifiers in the feature, so you should go back to your character's  racial dialog and add them in there as effects. Remember to use the add operation, rather than base value, since your race adds to your ability scores.</p>
                <p>By separating the source of your character's stats you can easily check how your character got their ability scores and stats, even after 20 levels, without getting confused or making mistakes.</p>

                <h2>Adding a Class</h2>
                <p>Currently your character is at level 0, because they don't have any class levels. Let's fix that.</p>
                <ul>
                    <li>Click the plus button in the card that currently says "Level 0"</li>
                    <li>A new class has now been added, name the class in the Class Name input and leave the level as 1</li>
                </ul>
                <p>We now have a class, lets add the saving throw proficiencies it gives us.</p>
                <ul>
                    <li>Click the Add Proficiency button</li>
                    <li>Click the dropdown box that currently has "Skill" selected, and choose "Saving Throw" instead</li>
                    <li>In the second dropdown choose the first saving throw your class gives you</li>
                    <li>The third dropdown lets us specify if we have half or double our proficiency bonus for this proficiency, leave it at the default "proficient" for now</li>
                </ul>
                <p>If you navigate back to the stat page, you will see that you now have a proficiency bonus, based on your class level, and the saving throw you are proficienct in will take your proficiency bonus into account.</p>
                <p>One of the most important things your class gives you is your hitpoints, so lets go add those now.</p>
                <ul>
                    <li>Navigate to the class dialog box by clicking on your class name in the journal tab and hitting the edit button</li>
                    <li>Click the Add Effect button</li>
                    <li>Choose the <em>Stats</em> stat group, and choose the <em>Hitpoints</em> stat</li>
                    <li>Choose the <em>Base Value</em> operation</li>
                </ul>
                <p>Now we need to decide how many hitpoints our class gives us. We will assume that we take the constant hitpoints per level, since it's both the rule used for league play and it's statistically advantageous over rolling for hitpoints every level.</p>
                <p>We could work out our hit points every level and change the effect each time, but we can do one better, we can input the calculation directly into the value field and have the character sheet figure it out for us</p>
                <p>Let's assume we are rolling a fighter, so in the class name you typed in "Fighter" (with the capital F, but without the quote marks). A fighter gets 10 hp at first level and 6 hitpoints every level after that.</p>
                <p>Lets rather split that into 4 bonus hitpoints at first level, and 6 hitpoints for every fighter level your character has. We can the write this as <em>4 + 6*FighterLevel</em> where the * represents multiplication.</p>
                <p><em>Note, we don't add the constitution modifier here, that's already taken care of by default, since all characters add their constitution modifier to their hit points</em></p>
                <ul>
                    <li>In the value field input <em>4 + 6 * FighterLevel</em>, the spaces aren't needed, but you must spell your class name exactly as it is spelt in the class name input box, capital letters and all, in our case "Fighter"</li>
                    <li>Create a new effect that effects the base value of <em>d10 Hit Dice</em> with the value of <em>FighterLevel</em>, since we also get our fighters level worth of hit dice</li>
                    <li>Check how your changes are reflected in the <em>Stats</em> tab</li>
                    <li>Change your level and check that the <em>Stats</em> tab gets updated accordingly</li>
                </ul>
                <p>You can try all sorts of calculations in your effects and in certain other places too. For example if you had some feature that is used a number of times equal to your wisdom modifier or 1, whichever is lower, you could limit its uses to <em>min(1, wisdomMod)</em> and the character sheet will figure it out for you, and update itself if you wisdom modifier happens to change later.</p>
            </Paper>
        );
    }
}

