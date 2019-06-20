import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

    ngOnInit() {
        $(document).ready(function(){
            var town="";
            $('.town').hide();
            $('.region').mouseover(function(){
                var town =$(this).attr('data-name');
                $('.town_name h5').text(town+'\n nb=55');
                $('.town').show(300);


            });
            $('.region').mouseout(function(){

                $('.town').hide();

            });
            $(document).mousemove(function (event){
                var win_width = $(document).width();
                $('.town').addClass('right');
                $('.town').removeClass('left');
                $('.town').css({top:event.pageY-65,left:event.pageX+100});

            });


        })
    }



}
