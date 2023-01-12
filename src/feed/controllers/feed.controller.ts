import { Controller, Post , Body, Get, Put, Param, Delete} from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../models/post.interface';
import {Observable} from 'rxjs';
import {UpdateResult, DeleteResult} from 'typeorm';


@Controller('feed')
export class FeedController {

constructor(
    private feedService : FeedService
){}

@Post()
create(@Body() post:FeedPost) : Observable<FeedPost>{
return this.feedService.createPost(post);       
}

@Get()
findAll(): Observable<FeedPost[]>
{
return this.feedService.FindAllPosts();
}


@Put(':id')
update(
    @Param('id') id:number,
    @Body() feedpost: FeedPost
) : Observable<UpdateResult>
{
return this.feedService.UpdatePost(id,feedpost);
}


@Delete(':id')
deletepost(@Param('id') id:number): Observable<DeleteResult>
{
  return this.feedService.deletePost(id);
}







}
