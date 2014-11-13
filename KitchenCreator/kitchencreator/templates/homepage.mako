<%inherit file="master.html"/>
<div class="page-header" id="authenticated">
    <div>    
    <p>Enter your ingredients here, with each ingredient separated by a comma</p>

    <p>
    Ingredients: <input type="text" name="Ingredients" id="Ingredients" />
    </p>

    <p>
    <button type="button" onclick="GetRecipes()">Submit</button>
    </p>

    </div>
    <div>
    <h1>Recipes</h1>
    <div id="recipeList">
    <table class="table" id="recipeTable">
    

    </table>


    </div>
    </div>

</div>



<script src="../js/recipe.js"></script>
