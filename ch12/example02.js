$.ajax({
  url: './sample.json',
  data: {
    id: 'a001'
  },
  type: 'GET',
  dataType: 'json',
}).done(function(json) {
  $( '<h1>' ).text( json.title ).appendTo('body')
  $( '<div class=\'content\'>' ).html(json.html).appendTo('body')
}).fial(function(xhr, status, errorThrown) {
  console.log('出現錯誤，無法完成')
  console.log('Error: ' + errorThrown)
  console.log('Status' + status)
  console.log(xhr)
}).always(function(xhr, status) {
  console.log('要求已完成')
})
