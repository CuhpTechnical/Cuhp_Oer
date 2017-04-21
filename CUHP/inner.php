<div class="container">
    
    <div class="row">
      <!--carousel-->
      <div id="carousel" class="carousel" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" class="active"></li>
          <li data-target="#carousel" data-slide-to="1" class=""></li>
          <li data-target="#carousel" data-slide-to="2" class=""></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="item">
            <img src="pics/1.jpg" alt="First"  data-holder-rendered="true" data-holder-rendered="true">
          </div>
          <div class="item">
            <img class="img-responsive" src="pics/2.jpg" alt="Second"  data-holder-rendered="true" data-holder-rendered="true">
          </div>
          <div class="item active">
            <img src="pics/3.jpg" alt="Third"  data-holder-rendered="true" data-holder-rendered="true">
          </div>
        </div>
        <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    <!--carousel-->
    </div>
    <div class="row">
      <!--left content-->
      <div class="col-md-4">

        <!--vc message-->
        <div class="row">
        <?php require_once 'vc_message.php';?>
        </div>
        <!--vc message-->

        <!--navigation links-->
        <div class="row">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        </div>
        <!--navigation links-->

      </div>
      <!--left content-->
      
      <!--mid content-->
      <div class="col-md-4">
      </div>
      <!--mid content-->

      <!--right content-->
      <div class="col-md-4">
        <!--calender-->
        <div class="row">
          <div id="datepicker">
          </div>
        </div>
        <!--calender-->

        <!--news-->
        <div class="row">
        </div>
        <!--news-->
      </div>
      <!--right content-->
    </div>
</div>