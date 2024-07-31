let compteurform = 1;

document.getElementById('add_form').addEventListener('click', () => {
    compteurform++;
    const espaceform = document.getElementById('espace_forms');
    const conteform = document.createElement('div');
    conteform.classList.add('form-container');
    conteform.id = 'form-' + compteurform;

    const form = document.createElement('div');
    form.innerHTML = `
        <button type="button" class="delete-button">&times;</button>
        <section class="arr-dep">
            <h3>Chambre ${compteurform}</h3>
            <div class="mar-top">Nombres de personnes</div>
            <div id="bord"></div>
            <div class="boite2">
                <div class="taille">
                    <label>Adulte(s)</label><br>
                    <input type="number" value="1" class="taille1" required><br>   
                </div>
                <div class="taille">
                    <label>Enfant(s)</label><br>
                    <input type="number" class="taille1" value="0"><br>  
                </div>
                <div class="taille">
                    <label>Bébé(s)</label><br>
                    <input type="number" class="taille1" value="0"><br>
                </div>
            </div>
            <p id="marge"><i>Enfant:</i> 2 à 12 ans<br><i>Bébé:</i> jusqu'à 1 an inclus</p>
        </section>
    `;

    conteform.appendChild(form);
    espaceform.appendChild(conteform);

    const deleteButton = conteform.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        console.log('Attempting to remove form with ID:', conteform.id); // Debugging line
        removeForm(conteform.id);
    });
});

function removeForm(formId) {
    const formToRemove = document.getElementById(formId);
    if (formToRemove) {
        formToRemove.remove();
        console.log('Form removed:', formId); // Debugging line
    } else {
        console.log('Form not found:', formId); // Debugging line
    }
}