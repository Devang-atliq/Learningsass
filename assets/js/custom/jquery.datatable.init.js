
$(document).ready(function() {
  $('#user').DataTable({
        pageLength: 12,
        lengthChange:false,
        searching:false,
        scrollX:true,
        scrollY:"57vh",        
        scrollXInner:"100%",
        // pagingType: 'full_numbers',
        language: {
          oPaginate: {
            sNext: '<span class="iconify" data-icon="majesticons:arrow-right-line" data-width="16" data-height="16"></span>',
            sPrevious: '<span class="iconify" data-icon="majesticons:arrow-left-line" data-width="16" data-height="16"></span>'  
          }
        },
        columnDefs: [
            { orderable: false, targets: 0 }
        ],
        order: [[1, 'asc']]
    }
  );
  
  
  $('#datatable').DataTable({
        pageLength: 12,        
        lengthChange:false,
        searching:false,
        scrollX:true,       
        scrollXInner:"100%",
        scrollY:"57vh",       
        // pagingType: 'full_numbers',
        language: {
          oPaginate: {
            sNext: '<span class="iconify" data-icon="majesticons:arrow-right-line" data-width="16" data-height="16"></span>',
            sPrevious: '<span class="iconify" data-icon="majesticons:arrow-left-line" data-width="16" data-height="16"></span>'  
          }
        },               
    }
  );

} );
 

   



