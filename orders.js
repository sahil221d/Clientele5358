const Orders = [
  {
    productName: "Ruko Fu Pro Drone",
    productNumber: "49347",
    paymentStatus: "Due",
    shipping: "Pending",
  },
  {
    productName: "Ruko Fu Pro Drone",
    productNumber: "49347",
    paymentStatus: "Due",
    shipping: "Pending",
  },
  {
    productName: "Drone with Camera Drone",
    productNumber: "96996",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
  {
    productName: "GPS 4k Drone",
    productNumber: "22821",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
  {
    productName: "DJI Air 2S",
    productNumber: "81475",
    paymentStatus: "Due",
    shipping: "Pending",
  },
  {
    productName: "Lozenge Drone",
    productNumber: "00482",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
];


// fill orders in table
Orders.forEach(order => {
    const tr =document.createElement('tr');
    const trContent= `
                         <td>${order.productName}</td>
                         <td>${order.productNumber}</td>
                         <td>${order.paymentStatus}</td>
                         <td class="${order.shipping ===
                          'Declined'?'danger' : order.shipping === 'pending' ? 'warning' :'primary'}">${order.shipping}</td>
                         <td class="primary">Details</td>`;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
                         })