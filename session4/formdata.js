const axios = require('axios')

const formData = new FormData()
formData.append('name', 'teodor')

axios.post('/file', {
  formData
}, {
  headers: {
    authorization: 'asdgfasg'
  }
})

fetch({
  method: 'POST',
  body: formData,
  headers: {
    authorization: 'asfgasd'
  }
})