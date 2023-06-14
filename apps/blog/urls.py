from django.urls import path

from .views import *


urlpatterns = [
    path('list',BlogListView.as_view()),
    path('by_category',ListPostsByCategoryView.as_view()),
    path('detail/<slug>',PostDetailView.as_view()),
    path("search/<str:search_term>",SearchBlogView.as_view()),
    
    path('author_list',AuthorBlogListView.as_view()),
    path('author_detail/<post_id>', AuthorPostDetailView.as_view()),
    path('edit',EditBlogPostView.as_view()),
    path('draft',DraftBlogPostView.as_view()),
    path('publish',PublishBlogPostView.as_view()),
    path('delete/<post_id>',DeleteBlogPostView.as_view()),
    path('create',CreateBlogPostView.as_view()),
        
]



