
// Create variable tabs to select all data in class tabs
const tabs = document.querySelectorAll('[data-tab-target]')

// Create variable tabContents to select all data in class tab-content
const tabContents =  document.querySelectorAll('[data-tab-content]')

// Create a function that listen to user click to different elements
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        //Remove the active element when user click to different element
        tabContents.forEach(tabContents =>{
            tabContents.classList.remove('active')
        })

        //Remove the current tab when user click to other tab
        tabs.forEach(tab =>{
            tab.classList.remove('active')
        })
        
        //Adding new active tab
        tab.classList.add('active')

        //Adding new active element based on element's ID
        target.classList.add('active')

    })
})
