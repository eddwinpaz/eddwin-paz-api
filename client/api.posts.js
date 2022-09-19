const getPostById = async (id) => {
  try {
    let response = await fetch(`/posts/${id}`, {
      method: 'GET',
    });

    if (response.status === 200) {
      let data = await response.json();
      return data;
    } else {
      return { error: 'Information not found' };
    }
  } catch (error) {
    return { error: 'Could not fetch data' };
  }
};

async function makeRequest() {
  let input = document.getElementById('postId').value;
  const response = await getPostById(input);

  console.log(response);

  let resultHTML = document.querySelector('.result');

  if (response.error) {
    resultHTML.innerHTML = `<br/><br/><strong>${response.error}</strong>`;
  }

  if (Object.keys(response).length > 2) {
    // let resultHTML = document.querySelector('.result');
    resultHTML.style.removeProperty('display');
    resultHTML.innerHTML = `
    <h2>Result</h2>
    <strong>Title</strong> ${response.title} <br/>
    <strong>Body</strong> ${response.body} <br/>
    `;
  }
}
