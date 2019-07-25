jQuery(function($){
  let $body = $('body');
  
  
  let $select = $('.woocommerce-ordering .orderby');
  console.log('$select.length:', $select.length);
  if($select.length>0){
    $select.dropkick();
  }
  
});